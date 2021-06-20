import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { allRequests , deleteRequest} from "../../modules/requests";


const RequestDetails = () => {
  const { requestId } = useParams();
  const dispatch = useDispatch();
  const { requests } = useSelector((state) => state);
  const [request, setRequest] = useState();

  useEffect(() => {
    dispatch(allRequests())
  }, []);

  useEffect(() => {
    setRequest(requests.find(user => user.id === parseInt(requestId)))
    // setBook(books.find(user => book.id === parseInt(bookId, 10)))
  }, [requestId, requests]);

  return request ? (
    <div className="row">
      <div className="col-sm-12">
        <h3>Details for  {request.title}</h3>
        <hr/>
        <p>Period Start</p>
        <p className="lead">{request.periodStart}</p>
        <p>Period End</p>
        <p className="lead">{request.periodEnd}</p>
        <p>Status</p>
        <p className="lead">{request.state }</p>
        <p>Moderated At</p>
        <p className="lead">{request.moderatedAt}</p>
        <hr/>
        <p>
          <Link to="/">&laquo; back to list</Link>
        </p>
      </div>
    </div>
  ) : null
}

export default RequestDetails
