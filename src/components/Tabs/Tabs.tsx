import { Curriculum, Description, FAQ, Hooking, Lecturer } from '../../types/ProgramDetailType';
import HookingImages from './TabHookingImages';

interface Props {
  hookingArr: Hooking[];
  programIntro: Description[];
  lecturerIntro: Lecturer;
  curriculum: Curriculum[];
  faq: FAQ[];
}

export default function Tabs({ hookingArr, programIntro, lecturerIntro, curriculum, faq }: Props) {
  return (
    <section>
      {hookingArr &&
        hookingArr.map((hookinData, i) => {
          return <HookingImages key={i} hookingData={hookinData} />;
        })}
    </section>
  );
}
