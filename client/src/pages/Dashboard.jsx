import {
  useEffect
} from "react";

import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  getGames
} from "../redux/games/gameSlice.js";

import GameCard
  from "../components/GameCard";


function Dashboard() {

  const dispatch =
    useDispatch();


  const {
    games,
    loading,
    error
  } = useSelector(
    (state) => state.games
  );


  useEffect(() => {

    dispatch(getGames());

  }, [dispatch]);


  if (loading) {

    return (

      <div
        className="
          text-center
          py-5
        "
      >

        <div
          className="
            spinner-border
            text-primary
          "
        />

      </div>

    );
  }


  return (

    <div>

      <section
        className="
          bg-dark
          text-white
          rounded-4
          p-4
          p-md-5
          mb-4
        "
      >

        <h1
          className="
            display-5
            fw-bold
          "
        >
          🏈 NFL Edge
        </h1>


        <p
          className="
            lead
            mb-0
          "
        >
          Data-driven NFL matchup,
          wager and parlay analysis.
        </p>

      </section>


      {error && (

        <div
          className="
            alert
            alert-danger
          "
        >
          {error}
        </div>

      )}


      <div
        className="
          row
          g-3
          mb-4
        "
      >

        <div className="col-md-4">

          <div
            className="
              card
              shadow-sm
              border-0
            "
          >

            <div className="card-body">

              <small
                className="text-muted"
              >
                Games
              </small>

              <h2>
                {games.length}
              </h2>

            </div>

          </div>

        </div>


        <div className="col-md-4">

          <div
            className="
              card
              shadow-sm
              border-0
            "
          >

            <div className="card-body">

              <small
                className="text-muted"
              >
                Model
              </small>

              <h2>
                Active
              </h2>

            </div>

          </div>

        </div>


        <div className="col-md-4">

          <div
            className="
              card
              shadow-sm
              border-0
            "
          >

            <div className="card-body">

              <small
                className="text-muted"
              >
                Data
              </small>

              <h2>
                Demo
              </h2>

            </div>

          </div>

        </div>

      </div>


      <h3 className="mb-3">
        This Week
      </h3>


      <div className="row g-4">

        {games.map((game) => (

          <div
            className="
              col-md-6
              col-xl-4
            "
            key={game._id}
          >

            <GameCard
              game={game}
            />

          </div>

        ))}

      </div>

    </div>

  );
}


export default Dashboard;