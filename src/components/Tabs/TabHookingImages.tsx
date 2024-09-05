import { Hooking } from '../../types/ProgramDetailType';

interface Props {
  hookingData: Hooking;
}

export default function TabHookingImages({ hookingData }: Props) {
  return (
    <article className="p-8 bg-white rounded-lg shadow-md max-w-2xl mx-auto my-8">
      {hookingData.preTitle && (
        <p className="text-sm text-blue-500 font-semibold">{hookingData.preTitle}</p>
      )}
      {hookingData.title && (
        <h2 className="text-2xl font-bold text-gray-800 mt-2 mb-6">{hookingData.title}</h2>
      )}
      {hookingData.tagTitle && (
        <div className="bg-blue-100 text-blue-700 font-bold py-1 px-4 rounded-full inline-block mb-4">
          {hookingData.tagTitle}
        </div>
      )}
      {hookingData.content && (
        <p className="text-gray-700 text-base mb-6 whitespace-pre-line">{hookingData.content}</p>
      )}

      {hookingData.hookingImageList && (
        <div className="flex flex-wrap gap-4">
          {hookingData.hookingImageList.map((hookingImage, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={hookingImage.imageUrl}
                alt={`${hookingImage.imageUrl}`}
                className="w-24 h-24 object-cover rounded-lg mb-2"
              />
              <p className="text-sm font-medium text-gray-600">{hookingImage.imageUrl}</p>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
