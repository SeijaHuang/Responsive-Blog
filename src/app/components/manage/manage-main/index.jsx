import { Outlet, NavLink } from 'react-router-dom';

export default (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-9">
          <Outlet></Outlet>
        </div>
        <div className="col-md-3">
          <div className="list-group">
            <NavLink
              className="list-group-item list-group-item-action"
              aria-current="dashboard"
              to="/manage/dashboard"
            >
              Dashboard
            </NavLink>
            <NavLink
              className="list-group-item list-group-item-action"
              aria-current="post management"
              to="/manage/post-mng"
            >
              Post Management
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
