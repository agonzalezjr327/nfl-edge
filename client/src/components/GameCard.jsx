import {
  useDispatch
} from "react-redux";

import {
  toast
} from "react-toastify";

import {
  addLeg
} from "../redux/parlay/parlaySlice";


function GameCard({ game }) {

  const dispatch =
    useDispatch();


  function addMoneyline() {

    // Determine which team has the
    // higher model win probability.

    const awayIsHigher =
      game.model.awayWinProbability >
      game.model.homeWinProbability;


    const leg = awayIsHigher
      ? {
          gameId: game._id,

          team: game.awayTeam,

          market: "MONEYLINE",

          selection:
            `${game.awayTeam} ML`,

          odds:
            game.odds.awayMoneyline,

          modelProbability:
            game.model.awayWinProbability,
        }

      : {
          gameId: game._id,

          team: game.homeTeam,

          market: "MONEYLINE",

          selection:
            `${game.homeTeam} ML`,

          odds:
            game.odds.homeMoneyline,

          modelProbability:
            game.model.homeWinProbability,
        };


    dispatch(
      addLeg(leg)
    );


    toast.success(
      "Added to parlay"
    );
  }


  return (

    <div
      className="
        card
        border-0
        shadow-sm
        h-100
      "
    >

      <div className="card-body">

        <div
          className="
            d-flex
            justify-content-between
            mb-3
          "
        >

          <span
            className="
              badge
              text-bg-secondary
            "
          >
            Week {game.week}
          </span>


          <small
            className="text-muted"
          >

            {new Date(
              game.gameDate
            ).toLocaleDateString()}

          </small>

        </div>


        <h4
          className="
            text-center
            fw-bold
          "
        >

          {game.awayAbbr}

          <span
            className="
              text-muted
              mx-3
            "
          >
            @
          </span>

          {game.homeAbbr}

        </h4>


        <div
          className="
            text-center
            text-muted
            mb-3
          "
        >

          {game.awayRecord}

          {" vs "}

          {game.homeRecord}

        </div>


        <hr />


        <div
          className="
            row
            text-center
          "
        >

          <div className="col-4">

            <small
              className="
                text-muted
                d-block
              "
            >
              Spread
            </small>

            <strong>
              {game.odds.spreadTeam}

              {" "}

              {game.odds.spread}
            </strong>

          </div>


          <div className="col-4">

            <small
              className="
                text-muted
                d-block
              "
            >
              Total
            </small>

            <strong>
              {game.odds.total}
            </strong>

          </div>


          <div className="col-4">

            <small
              className="
                text-muted
                d-block
              "
            >
              Weather
            </small>

            <strong>
              {game.weather.temperature}°
            </strong>

          </div>

        </div>


        <hr />


        <div
          className="
            bg-light
            rounded
            p-3
            mb-3
          "
        >

          <small
            className="
              text-muted
              d-block
            "
          >
            Model Projection
          </small>

          <strong>

            {game.awayAbbr}

            {" "}

            {game.model.awayScore}

            {" - "}

            {game.homeAbbr}

            {" "}

            {game.model.homeScore}

          </strong>

        </div>


        <button
          className="
            btn
            btn-primary
            w-100
          "
          onClick={addMoneyline}
        >

          <i
            className="
              bi
              bi-plus-circle
              me-2
            "
          />

          Add Model Favorite

        </button>

      </div>

    </div>

  );
}


export default GameCard;