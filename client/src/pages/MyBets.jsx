import {
  useEffect
} from "react";

import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  getBets
} from "../redux/bets/betsSlice";


function MyBets() {

  const dispatch =
    useDispatch();


  const { bets } =
    useSelector(
      (state) => state.bets
    );


  useEffect(() => {

    dispatch(getBets());

  }, [dispatch]);


  return (

    <div>

      <h1 className="mb-4">
        My Bets
      </h1>


      <div
        className="
          table-responsive
          bg-white
          rounded
          shadow-sm
        "
      >

        <table
          className="
            table
            table-hover
            mb-0
          "
        >

          <thead
            className="
              table-dark
            "
          >

            <tr>

              <th>Date</th>

              <th>Type</th>

              <th>Wager</th>

              <th>Odds</th>

              <th>Result</th>

              <th>Profit</th>

            </tr>

          </thead>


          <tbody>

            {bets.map((bet) => (

              <tr key={bet._id}>

                <td>
                  {
                    new Date(
                      bet.createdAt
                    )
                    .toLocaleDateString()
                  }
                </td>

                <td>
                  {bet.type}
                </td>

                <td>
                  ${bet.wager}
                </td>

                <td>
                  {bet.odds}
                </td>

                <td>
                  {bet.result}
                </td>

                <td>
                  ${bet.profit}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );
}


export default MyBets;