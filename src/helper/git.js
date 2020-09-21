import FS from '@isomorphic-git/lightning-fs';

const http = require('isomorphic-git/http/web')
const JSZip = require('jszip')
const git = require('isomorphic-git')
let dir = '/semsm';
const fs = new FS("fs")
const pfs = fs.promises
const zip = new JSZip();
export default class Git {
    // Initialize isomorphic-git with a file system
    // I prefer using the Promisified version honestly
    constructor(_dir) {
        //   dir = _dir
        // this.fs = new FS("fs")
        // this.pfs = this.fs.promises
        // this.dir = '/semsm'
        // console.log(this.dir, 'dir');

    }
    async init() {
        // console.log('init', dir);
        if (!await this.exists(dir)) {
            // console.log('create dir', dir);
            await pfs.mkdir(dir);
        }

    }
    async cloneRepo(url = 'https://github.com/open-semsem/contract-templates', ref = 'master', singleBranch = true) {
        // git.clone({ fs, http, dir, url: 'https://github.com/isomorphic-git/lightning-fs', corsProxy: 'https://cors.isomorphic-git.org' }).then(console.log)

        const clone = await git.clone({
            fs,
            http,
            dir,
            corsProxy: 'https://cors.isomorphic-git.org',
            url,
            ref,
            singleBranch
        });
        console.log(clone, 'clone');
        return clone;
    }
    async readDir() {
        if (!await this.exists(dir)) {
            return await pfs.readdir(dir);
        } else {
            return false;
        }

    }
    async listFiles() {
        return await git.listFiles({
            fs,
            dir: dir,
            ref: 'HEAD'
        })

    }
    downloadFile(fileName, data) {

        const file = new window.Blob([data], {
            type: 'application/octet-binary;charset=UTF-8'
        })
        const url = window.URL.createObjectURL(file)
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
    }

    async readfie(filePath) {
        const file = await this.FileExists(filePath);
        // console.log(file, 'file');
        if (file) {
            return file;

        } else {
            return []
        }
    }
    async FileExists(filepath, options = {}) {
        try {
            const file = await pfs.readFile(filepath)
            return file;
        } catch (err) {
            if (err.code === 'ENOENT' || err.code === 'ENOTDIR') {
                return false
            } else {
                console.log('Unhandled error in "FileSystem.exists()" function', err)
                throw err
            }
        }
    }
    /**
     * Return true if a file exists, false if it doesn't exist.
     * Rethrows errors that aren't related to file existance.
     */
    async exists(dir) {
        try {
            console.log('check dir', dir);

            await pfs.readdir(dir)
            return true
        } catch (err) {
            if (err.code === 'ENOENT' || err.code === 'ENOTDIR') {
                return false
            } else {
                console.log('Unhandled error in "FileSystem.exists()" function', err)
                throw err
            }
        }
    }
    async zipFiles(files = [], params) {
        zip.folder(dir);
        files.forEach(async (file, j) => {
            if (file == '.env') {
                const content = await this.readfie(`${dir}/${file}`);
                // zip.folder(dir).file(file, content);
                const newData = await this.adjustEnvFile(content, params)
                const data = newData.toString().split(",").join("\n")
                var uint8array = new TextEncoder("utf-8").encode(data);

                console.log(newData.toString().split(",").join("\n"), 'newData');
                zip.folder(dir).file(file, uint8array);
                

            } else {
                const content = await this.readfie(`${dir}/${file}`);
                zip.folder(dir).file(file, content);
            }

            if (j + 1 == files.length) {
                console.log({
                    zip
                }, 'zipppp');
                zip.generateAsync({
                    type: "blob"
                }).then((content) => {
                    this.downloadFile("semsmBox.zip", content);
                });
                // downloadFile( "test",zip.files)
            }
        })
    };
    adjustEnvFile(content, newParam) {
        return new Promise((resolve, reject) => {
            // decode data 
            const string = new TextDecoder().decode(content);
            //  get data by line 
            const lines = string.match(/^.*([\n\r]+|$)/gm);
            // read lines 
            lines.forEach((line, index) => {
                const equalIndex = line.indexOf(`=`)
                // get key 
                if (equalIndex > 0) {
                    const originalKey = line.substr(0, equalIndex);
                    newParam.forEach(param => {
                        Object.keys(param).forEach((key, value, x) => {
                            // console.log(key, 'key');
                            if (originalKey === key.toUpperCase()) {
                                const tempLine = line.substr(0, equalIndex + 1) + value;
                                // console.log(tempLine, 'tempLine');
                                lines[index] = tempLine;
                                //  console.log(lines,'lines');
                            }

                        })
                    })

                }
                if (lines.length == index + 1) {
                    // console.log(lines,'liness');
                    resolve(lines)
                }

            })

        })




    }
    bytesToHexString(bytes) {
        if (!bytes) return null;

        bytes = new Uint8Array(bytes);
        let hexBytes = [];

        for (let i = 0; i < bytes.length; ++i) {
            let byteString = bytes[i].toString(16);
            if (byteString.length < 2) byteString = '0' + byteString;
            hexBytes.push(byteString);
        }

        return hexBytes.join('');
    }
    hexToString(hex) {
        var string = '';
        for (var i = 0; i < hex.length; i += 2) {
            string += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
        }
        return string;
    }
}