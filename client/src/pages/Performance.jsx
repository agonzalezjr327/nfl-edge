import {
  useSelector
} from "react-redux";


function Performance() {

  const { bets } =
    useSelector(
      (state) => state.bets
    );


  const wins =
    bets.filter(
      (bet) =>
        bet.result === "WIN"
    ).length;


  const losses =
    bets.filter(
      (bet) =>
        bet.result === "LOSS"
    ).length;


  const profit =
    bets.reduce(
      (total, bet) =>
        total + bet.profit,
      0
    );


  return (

    <div>

      <h1 className="mb-4">
        Model Performance
      </h1>


      <div className="row g-4">

        <div className="col-md-4">

          <div
            className="
              card
              border-0
              shadow-sm
            "
          >

            <div className="card-body">

              <small
                className="text-muted"
              >
                Wins
              </small>

              <h2>
                {wins}
              </h2>

            </div>

          </div>

        </div>


        <div className="col-md-4">

          <div
            className="
              card
              border-0
              shadow-sm
            "
          >

            <div className="card-body">

              <small
                className="text-muted"
              >
                Losses
              </small>

              <h2>
                {losses}
              </h2>

            </div>

          </div>

        </div>


        <div className="col-md-4">

          <div
            className="
              card
              border-0
              shadow-sm
            "
          >

            <div className="card-body">

              <small
                className="text-muted"
              >
                Profit / Loss
              </small>

              <h2>
                ${profit.toFixed(2)}
              </h2>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}


export default Performance;