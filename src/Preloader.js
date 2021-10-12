import React, { Component } from 'react'

class Preloader extends Component {
    render() {
        return (
            // PRELOADER PART START
            <div class="preloader">
              <div class="loader">
                  <div class="ytp-spinner">
                      <div class="ytp-spinner-container">
                          <div class="ytp-spinner-rotator">
                              <div class="ytp-spinner-left">
                                  <div class="ytp-spinner-circle"></div>
                              </div>
                              <div class="ytp-spinner-right">
                                  <div class="ytp-spinner-circle"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          // PRELOADER PART ENDS 
        )
    }
}

export default Preloader
