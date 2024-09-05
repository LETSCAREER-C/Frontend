import { Description } from '../../types/ProgramDetailType';

interface Props {
  introData: Description;
}

export default function TabDescription({ introData }: Props) {
  if (introData.templateType === 'image' && introData.imageTypeImageUrl) {
    return (
      <section className="flex justify-center items-center bg-white p-8 rounded-lg shadow-md">
        <img
          src={introData.imageTypeImageUrl}
          alt="Description Image"
          className="max-w-full h-auto rounded-lg"
        />
      </section>
    );
  }

  return (
    <article>
      <section className="p-8 bg-white rounded-lg shadow-md max-w-2xl mx-auto my-8">
        {/* Title Section */}
        {introData.title && (
          <h2 className="text-2xl font-bold text-gray-800 mt-2 mb-6">{introData.title}</h2>
        )}

        {/* Hashtags Section */}
        {introData.hashtags && (
          <div className="flex flex-wrap gap-2 mb-6">
            {introData.hashtags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-600 font-medium py-1 px-3 rounded-full"
              >
                {tag.hashtag}
              </span>
            ))}
          </div>
        )}

        {/* Content Section */}
        {introData.content && (
          <p className="text-gray-700 text-base mb-6 whitespace-pre-line">{introData.content}</p>
        )}

        {/* Description Images Section */}
        {introData.descriptionImages && (
          <div className="flex justify-center">
            {introData.descriptionImages.map((image, index) => (
              <img
                key={index}
                src={image.imageUrl}
                alt={`description-image-${index}`}
                className="max-w-full h-auto rounded-lg"
              />
            ))}
          </div>
        )}
      </section>
    </article>
  );
}
