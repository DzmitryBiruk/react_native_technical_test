import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { get } from "lodash";
import { AppLoading } from "expo";

import { playlistsLoadStart } from "../logic/actions";
import Loading from "../../shared/loading";
import Error from "../../shared/error";
import Header from "../components/header";
import PlaylistsList from "../components/playlistsList";

function Playlists({ playlistsLoadStart, isLoading, loadingError, response }) {
  useEffect(() => {
    playlistsLoadStart();
  }, []);

  if (isLoading) {
    return <Loading />;
  } else if (loadingError) {
    return <Error />;
  }

  const { message, playlists = {} } = response;

  return (
    <>
      <Header title={message} />
      <PlaylistsList playlists={playlists.items} />
    </>
  );
}

const mapStateToProps = state => ({
  isLoading: get(state, "playlists.isLoading", true),
  loadingError: get(state, "playlists.error"),
  response: get(state, "playlists.data")
});

const mapDispatchToProps = dispatch => ({
  playlistsLoadStart: bindActionCreators(playlistsLoadStart, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlists);
