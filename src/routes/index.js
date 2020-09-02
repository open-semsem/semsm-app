import React, {  Suspense } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {Home,Semsm,Offers,Prices,ChatBot,Subscribe} from '../views'


const Routes = () => {
    const location = useLocation();
  
    const pageVariants = {
      initial: {
        opacity: 0,
        scale: 0.99
      },
      in: {
        opacity: 1,
        scale: 1
      },
      out: {
        opacity: 0,
        scale: 1.01
      }
    };
  
    const pageTransition = {
      type: 'tween',
      ease: 'anticipate',
      duration: 0.4
    };
  
    return (
   
        <AnimatePresence>
          <Suspense
            fallback={
              <div className="d-flex align-items-center vh-100 justify-content-center text-center font-weight-bold font-size-lg py-3">
                <div className="w-50 mx-auto">
                  Please wait while Semsm is loading
                </div>
              </div>
            }>
            <Switch>
              <Redirect exact from="/" to="/Home" />
              <Route path={['/Home']}>
               
                  <Switch location={location} key={location.pathname}>
                    <motion.div
                      initial="initial"
                      animate="in"
                      exit="out"
                      variants={pageVariants}
                      transition={pageTransition}>
                      <Route path="/Home" component={Home} />
                  



                    </motion.div>
                  </Switch>
             
              </Route>
  
              <Route
                path={[
                 
                  '/Services',
                  '/Semsm',
                  '/Prices',
                  '/Subscribe',
                  '/Chat'
              
                ]}>
               <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                        <Route path="/Semsm" component={Semsm} />
                      <Route path="/Services" component={Offers} />
                      <Route path="/Prices" component={Prices} />
                      <Route path="/Chat" component={ChatBot} />
                      <Route path="/Subscribe" component={Subscribe} />
                  </motion.div>
                </Switch>
              </Route>
            </Switch>
          </Suspense>
        </AnimatePresence>
     
    );
  };
  
  export default Routes;