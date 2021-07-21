import React, { Component } from 'react';

export class HowItWorks extends Component {
  render() {
    return(
      <div className="container">
        <h3>Select your choice of handbag</h3>
        <div>
          <ul>
            <li>If a handbag you want is unavailable, add it to your wishlist and we will notify you through email when it becomes available</li>
          </ul>
        </div>

        <h3>Once you are ready, proceed to check out</h3>
        <div>
          <ul>
            <li>Provide basic information requested</li>
            <li>A credit check (don’t worry, it won’t hurt your credit score) is required to rent your first handbag.</li>
          </ul>
        </div>
      </div>
    )
  }
}