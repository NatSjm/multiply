import ProgressBar from "@ramonak/react-progress-bar";

const Progressbar = ({completed, maxCompleted}) => {
	return <ProgressBar isLabelVisible={false} completed={completed} maxCompleted={maxCompleted} />;
};

export default Progressbar;
