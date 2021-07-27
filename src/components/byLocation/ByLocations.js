import React from 'react';
import './ByLocation.css';
import Location from '../location/Location';

const ByLocations = () => {
    return (
        <div className="byLocations ">
            <div className="locations">
                <Location/>
            </div>
            <div className="table borderLess">
                <table>
                    <thead>
                        <tr>
                            <td>TOP LOCATIONS</td>
                            <td>ORDER</td>
                            <td>REVENUE</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>United State</td>
                            <td>357</td>
                            <td>$23,397</td>
                        </tr>
                        <tr>
                            <td>United State</td>
                            <td>357</td>
                            <td>$23,397</td>
                        </tr>
                        <tr>
                            <td>United State</td>
                            <td>357</td>
                            <td>$23,397</td>
                        </tr>
                        <tr>
                            <td>United State</td>
                            <td>357</td>
                            <td>$23,397</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ByLocations;