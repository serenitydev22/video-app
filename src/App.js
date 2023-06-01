import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Adding a video to your ReactJS application</h1>
      <section className="block local">
        <h2>Adding a local video</h2>

        <video 
          className="video-demo" 
          width="640"
          height="264"
          controls
          src="local.mp4"
          muted
          autoPlay
        >
        </video>

      </section>
      <section className="block youtube">
        <h2>Adding a video from YouTube</h2>

        <iframe 
          width="640"
          height="264"
          allowFullScreen
          src="https://www.youtube.com/embed/_7DfrfEWJMc?autoplay=1&mute=1"
          title="videoDemo"
        />
      </section>
    </div>
  );
}

export default App;
