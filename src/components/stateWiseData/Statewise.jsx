import React, { useState, useEffect } from 'react';
const Statewise = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [statesData, setStateData] = useState([]);
  const [casesTimeSeries, setDataCts] = useState([]);
  const getCovidDataStateWise = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    // const res = await fetch("https://api.covid19india.org/data.json");
    const actualData = await res.json();
    setStateData(actualData.statewise);
    setDataCts(actualData.cases_time_series);
  }
  useEffect(() => {
    getCovidDataStateWise();
  }, []);

  return (
    <>
      <div className="bg-white rounded shadow-sm p-3">
        <div className="inline_tabs">
          <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
            State Wise Data
          </button>
          <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
            Cases Time Series
          </button>
        </div>

        <div className="content-tabs">
          <div className={toggleState === 1 ? "d-block" : "d-none"}>
            <h5 className="mt-3"><strong>India</strong> Covid - 19 Dashboard</h5>
            <hr />
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr key={"head"}>
                    <th>State</th>
                    <th>Confirmed</th>
                    <th>Recovered</th>
                    <th>Deaths</th>
                    <th>Active</th>
                    <th>Updated</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    statesData.map((currElem, ind) => {
                      return (
                        <tr key={ind}>
                          <td>{currElem.state}</td>
                          <td>{currElem.confirmed}</td>
                          <td>{currElem.recovered}</td>
                          <td>{currElem.deaths}</td>
                          <td>{currElem.active}</td>
                          <td>{currElem.lastupdatedtime}</td>
                        </tr>
                      );
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className={toggleState === 2 ? "d-block" : "d-none"}>
          <h5 className="mt-3"><strong>India</strong> Covid - 19 cases time series</h5>
          <hr />
          <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <thead>
                <tr key={"headCts"}>
                  <th>Dailyconfirmed</th>
                  <th>Dailydeceased</th>
                  <th>Dailyrecovered</th>
                  <th>Date</th>
                  <th>Totalconfirmed</th>
                  <th>Totaldeceased</th>
                  <th>totalrecovered</th>
                </tr>
              </thead>
              <tbody>
                {
                  casesTimeSeries.map((currElemCts, cts) => {
                    return (
                      <tr key={currElemCts.date}>
                        <td>{currElemCts.dailyconfirmed}</td>
                        <td>{currElemCts.dailydeceased}</td>
                        <td>{currElemCts.dailyrecovered}</td>
                        <td>{currElemCts.dateymd}</td>
                        <td>{currElemCts.totalconfirmed}</td>
                        <td>{currElemCts.totaldeceased}</td>
                        <td>{currElemCts.totalrecovered}</td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statewise;