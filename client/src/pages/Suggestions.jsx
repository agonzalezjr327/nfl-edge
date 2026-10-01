import {
  useSelector
} from "react-redux";


function Suggestions() {

  const { games } =
    useSelector(
      (state) => state.games
    );


  return (

    <div>

      <h1 className="mb-2">
        Model Suggestions
      </h1>


      <p className="text-muted">

        Markets where the model sees
        a potentially meaningful
        difference from the current
        sportsbook price.

      </p>


      <div className="row g-4">

        {games.map((game) => {

          const away =
            game.model
              .awayWinProbability;


          const home =
            game.model
              .homeWinProbability;


          const awayBetter =
            away > home;


          const team =
            awayBetter
              ? game.awayTeam
              : game.homeTeam;


          const probability =
            awayBetter
              ? away
              : home;


          return (

            <div
              className="
                col-md-6
                col-xl-4
              "
              key={game._id}
            >

              <div
                className="
                  card
                  shadow-sm
                  border-0
                  h-100
                "
              >

                <div className="card-body">

                  <span
                    className="
                      badge
                      text-bg-primary
                      mb-3
                    "
                  >
                    MONEYLINE
                  </span>


                  <h4>
                    {team} ML
                  </h4>


                  <p
                    className="
                      text-muted
                    "
                  >
                    {game.awayTeam}

                    {" @ "}

                    {game.homeTeam}
                  </p>


                  <h2>
                    {
                      (
                        probability *
                        100
                      ).toFixed(1)
                    }%
                  </h2>


                  <small
                    className="
                      text-muted
                    "
                  >
                    Model win
                    probability
                  </small>

                </div>

              </div>

            </div>

          );

        })}

      </div>

    </div>

  );
}


export default Suggestions;