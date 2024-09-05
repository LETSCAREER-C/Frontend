import { Lecturer } from '../../types/ProgramDetailType';

interface Props {
  lecturerData: Lecturer;
}

export default function TabLecturerIntro({ lecturerData }: Props) {
  if (lecturerData.templateType === 'image') {
    // templateType이 'image'인 경우 이미지만 렌더링
    return (
      <section className="flex justify-center items-center bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
        <img
          src={lecturerData.profileImage}
          alt={lecturerData.name}
          className="w-full h-auto rounded-lg"
        />
      </section>
    );
  }

  return (
    <section className="p-8 bg-white rounded-lg shadow-md max-w-2xl mx-auto my-8">
      {/* Title Section */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        자기소개서 전문가 {lecturerData.name}
      </h2>

      {/* Profile Image */}
      <div className="flex justify-center mb-6">
        <img
          src={lecturerData.profileImage}
          alt={lecturerData.name}
          className="w-48 h-48 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Name and Nickname */}
      <div className="text-center mb-4">
        <p className="text-lg font-semibold text-gray-800">{lecturerData.name}</p>
        <p className="text-sm text-gray-500">{lecturerData.nickName}</p>
      </div>

      {/* Career */}
      <p className="text-sm text-gray-600 mb-6 whitespace-pre-line">{lecturerData.career}</p>

      {/* Introduction */}
      <p className="text-sm text-gray-600">{lecturerData.intro}</p>
    </section>
  );
}
