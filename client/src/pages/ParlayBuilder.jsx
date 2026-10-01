import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  removeLeg,
  clearParlay,
  setWager
} from "../redux/parlay/parlaySlice";


function ParlayBuilder() {

  const dispatch =
    useDispatch();


  const {
    legs,
    wager
  } = useSelector(
    (state) => state.parlay
  );


  // This assumes independent events.
  const probability =
    legs.reduce(
      (total, leg) => {

        return (
          total *
          leg.modelProbability
        );

      },
      1
    );


  return (

    <div>

      <div
        className="
          d-flex
          justify-content-between
          align-items-center
          mb-4
        "
      >

        <div>

          <h1>
            Parlay Builder
          </h1>

          <p className="text-muted">
            Build and evaluate
            multi-game combinations.
          </p>

        </div>


        <button
          className="
            btn
            btn-outline-danger
          "
          onClick={() =>
            dispatch(clearParlay())
          }
        >
          Clear
        </button>

      </div>


      {legs.length === 0 ? (

        <div
          className="
            alert
            alert-secondary
          "
        >

          No legs yet.

          Add selections from
          the Games page.

        </div>

      ) : (

        <div className="row">

          <div className="col-lg-8">

            {legs.map(
              (leg, index) => (

                <div
                  className="
                    card
                    shadow-sm
                    border-0
                    mb-3
                  "
                  key={leg.selection}
                >

                  <div
                    className="
                      card-body
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                  >

                    <div>

                      <small
                        className="
                          text-muted
                        "
                      >
                        Leg {index + 1}
                      </small>


                      <h5
                        className="mb-1"
                      >
                        {leg.selection}
                      </h5>


                      <span
                        className="
                          badge
                          text-bg-secondary
                        "
                      >

                        {
                          (
                            leg
                              .modelProbability *
                            100
                          ).toFixed(1)
                        }%

                      </span>

                    </div>


                    <button
                      className="
                        btn
                        btn-sm
                        btn-outline-danger
                      "
                      onClick={() =>
                        dispatch(
                          removeLeg(
                            leg.selection
                          )
                        )
                      }
                    >

                      Remove

                    </button>

                  </div>

                </div>

              )
            )}

          </div>


          <div className="col-lg-4">

            <div
              className="
                card
                shadow
                border-0
              "
            >

              <div className="card-body">

                <h4>
                  Parlay Analysis
                </h4>

                <hr />


                <p>
                  Legs:

                  <strong
                    className="float-end"
                  >
                    {legs.length}
                  </strong>
                </p>


                <p>
                  Model Probability:

                  <strong
                    className="float-end"
                  >

                    {
                      (
                        probability *
                        100
                      ).toFixed(2)
                    }%

                  </strong>

                </p>


                <label
                  className="
                    form-label
                    mt-3
                  "
                >
                  Wager
                </label>


                <div
                  className="
                    input-group
                  "
                >

                  <span
                    className="
                      input-group-text
                    "
                  >
                    $
                  </span>


                  <input
                    className="
                      form-control
                    "
                    type="number"
                    value={wager}
                    onChange={(e) =>
                      dispatch(
                        setWager(
                          e.target.value
                        )
                      )
                    }
                  />

                </div>


                <div
                  className="
                    alert
                    alert-warning
                    mt-3
                    mb-0
                  "
                >

                  Combined probability
                  currently assumes the
                  legs are independent.

                </div>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>

  );
}


export default ParlayBuilder;