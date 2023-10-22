import ReactPlayer from 'react-player';

const MyPlayer = ({ project }) => {
  return (
    <div>
      <ReactPlayer
        url={project.player}
        controls={true}
        height={300}
        width={400}
      />
    </div>
  );
};

export default MyPlayer;
