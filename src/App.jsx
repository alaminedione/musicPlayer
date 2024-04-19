import './App.css';

export default function app() {
  return (
    <>
      <div className="page-playing-son">
        <div className="topBar">
          <button className="btn-expand"> <i className="material-icons">expand_more</i> </button>
          <div> music </div>
          <div> parole </div>
          <button className="btn-equalizer"> <i className="material-icons">equalizer</i> </button>
        </div>
        <div className="card-song">
          <img className="card-song-img" src="./assets/images/woman1.jpg" width={400} height={'auto'} className="card-song-img" />
          <p className="card-song-title"> Titre</p>
          <p className="card-song-artist">artiste</p>
        </div>
        <div className="player">
          <div className="playerBar">
            <button className="btn-repeat"> <i className="material-icons">repeat</i> </button>
            <button className="btn-favorite"> <i className="material-icons">favorite</i> </button>
          </div>
          <div className="progression-bar">
            <progress value="75" max="100"> </progress>
            <p className="progression-time"> </p>
          </div>
          <div className="playerControls">
            <button className="btn-shuffle"> <i className="material-icons">shuffle</i> </button>
            <button className="btn-skip-previous"> <i className="material-icons">skip_previous</i> </button>
            <button className="btn-play"> <i className="material-icons">play_arrow</i> </button>
            <button className="btn-skip-next"> <i className="material-icons">skip_next</i> </button>
            <button className="btn-queue-music"> <i className="material-icons">queue_music</i> </button>
          </div>
        </div>
      </div>
    </>
  );
}
