import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { get } from "lodash";

import Error from "../../shared/Error";
import Loading from "../../shared/Loading";
import PlaylistDescription from "../components/PlaylistDescription";
import { playlistDetailsLoadStart as playlistDetailsLoadStartAction } from "../logic/actions";
import { COLORS } from "../../constants/colors";

const Playlists = (props) => {
  const {
    navigation, loadingError, isLoading, playlistDetails, playlistDetailsLoadStart,
  } = props;

  const { imageUrl, name, id } = navigation.state.params || {};
  const { description, followers } = playlistDetails || {};

  useEffect(() => {
    playlistDetailsLoadStart(id);
  }, [id]);

  if (loadingError) {
    return <Error />;
  }

  return (
    <Fragment>
      <PlaylistDescription
        imageUrl={imageUrl}
        name={name}
        description={description}
        followersObj={followers}
      />
      {isLoading && <Loading color={COLORS.GREEN_PRIMARY} />}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  playlistDetails: get(state, "playlistDetails.data"),
  isLoading: get(state, "playlistDetails.isLoading"),
  loadingError: get(state, "playlistDetails.error"),
});

const mapDispatchToProps = (dispatch) => ({
  playlistDetailsLoadStart: bindActionCreators(playlistDetailsLoadStartAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Playlists);
