import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { get } from "lodash";

import { playlistsLoadStart as playlistsLoadStartAction } from "../logic/actions";
import Loading from "../../shared/loading";
import Error from "../../shared/error";
import Header from "../components/Header";
import PlaylistsList from "../components/playlistsList";

const Playlists = ({
  playlistsLoadStart, isLoading, loadingError, response,
}) => {
  useEffect(() => {
    playlistsLoadStart();
  }, []);

  if (isLoading) {
    return <Loading />;
  } if (loadingError) {
    return <Error />;
  }

  const { message, playlists = {} } = response;

  return (
    <Fragment>
      <Header title={message} />
      <PlaylistsList playlists={playlists.items} />
    </Fragment>
  );
};

const mapStateToProps = (state) =>
  ({
    isLoading: get(state, "playlists.isLoading", true),
    loadingError: get(state, "playlists.error"),
    response: get(state, "playlists.data"),
  });

const mapDispatchToProps = (dispatch) =>
  ({
    playlistsLoadStart: bindActionCreators(playlistsLoadStartAction, dispatch),
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playlists);
