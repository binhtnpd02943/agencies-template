// assets
import light from '../../assets/icons/empty_light.svg';
import Spring from '../spring';

function Empty({ text = 'Nothing found' }) {
	return (
		<Spring className="flex flex-1 flex-col items-center justify-center gap-3" type="slideUp">
			<img className="max-w-[180px]" src={light} alt="Empty" />
			<p className="text-sm font-body text-gray-500 italic">{text}</p>
		</Spring>
	);
}

export default Empty;
