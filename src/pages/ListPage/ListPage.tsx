import React, { useEffect, useState } from 'react';
import CareerFilter from '../../components/Filters/CareerFilter';
import ProgramBox from '../../components/PageNation/ProgramBox';
import TypeFilter from '../../components/Filters/TypeFilter';
import { RecruitState } from '../../components/Filters/RecruitTags';

interface Program {
  id: number;
  title: string;
  intro: string;
  dday: number;
  program_start_date: string;
  program_finish_date: string;
  imageUrl: string;
  status: RecruitState;
}

const dummyData: Program[] = [
  {
    id: 1,
    title: 'CX Manager의 모든 것과 커리어 설계',
    intro: '제너럴의 스페셜리스트, CX Manager',
    dday: 12,
    program_start_date: 'YY.MM.DD',
    program_finish_date: 'YY.MM.DD',
    imageUrl: 'https://via.placeholder.com/149x106',
    status: RecruitState.RECRUITING,
  },
  {
    id: 2,
    title: 'CX Manager의 모든 것과 커리어 설계',
    intro: '제너럴의 스페셜리스트, CX Manager',
    dday: 12,
    program_start_date: 'YY.MM.DD',
    program_finish_date: 'YY.MM.DD',
    imageUrl: 'https://via.placeholder.com/149x106',
    status: RecruitState.RECRUITING,
  },
  {
    id: 3,
    title: 'CX Manager의 모든 것과 커리어 설계',
    intro: '제너럴의 스페셜리스트, CX Manager',
    dday: 12,
    program_start_date: 'YY.MM.DD',
    program_finish_date: 'YY.MM.DD',
    imageUrl: 'https://via.placeholder.com/149x106',
    status: RecruitState.ENDED,
  },
  {
    id: 4,
    title: 'CX Manager의 모든 것과 커리어 설계',
    intro: '제너럴의 스페셜리스트, CX Manager',
    dday: 12,
    program_start_date: 'YY.MM.DD',
    program_finish_date: 'YY.MM.DD',
    imageUrl: 'https://via.placeholder.com/149x106',
    status: RecruitState.RECRUITING,
  },
  {
    id: 5,
    title: 'CX Manager의 모든 것과 커리어 설계',
    intro: '제너럴의 스페셜리스트, CX Manager',
    dday: 12,
    program_start_date: 'YY.MM.DD',
    program_finish_date: 'YY.MM.DD',
    imageUrl: 'https://via.placeholder.com/149x106',
    status: RecruitState.ENDED,
  },
  {
    id: 6,
    title: 'CX Manager의 모든 것과 커리어 설계',
    intro: '제너럴의 스페셜리스트, CX Manager',
    dday: 12,
    program_start_date: 'YY.MM.DD',
    program_finish_date: 'YY.MM.DD',
    imageUrl: 'https://via.placeholder.com/149x106',
    status: RecruitState.RECRUITING,
  },
  {
    id: 7,
    title: 'CX Manager의 모든 것과 커리어 설계',
    intro: '제너럴의 스페셜리스트, CX Manager',
    dday: 12,
    program_start_date: 'YY.MM.DD',
    program_finish_date: 'YY.MM.DD',
    imageUrl: 'https://via.placeholder.com/149x106',
    status: RecruitState.ENDED,
  },
  {
    id: 8,
    title: 'CX Manager의 모든 것과 커리어 설계',
    intro: '제너럴의 스페셜리스트, CX Manager',
    dday: 12,
    program_start_date: 'YY.MM.DD',
    program_finish_date: 'YY.MM.DD',
    imageUrl: 'https://via.placeholder.com/149x106',
    status: RecruitState.ENDED,
  },
];

const ListPage: React.FC = () => {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    setPrograms(dummyData);
  }, []);

  return (
    <div>
      <CareerFilter />
      <TypeFilter />
      <div className='flex flex-wrap justify-center items-center'>
        {programs.map((program) => (
          <ProgramBox key={program.id} program={program} />
        ))}
      </div>
    </div>
  );
}

export default ListPage;
