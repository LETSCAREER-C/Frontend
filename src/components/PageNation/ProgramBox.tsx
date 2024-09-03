import React from 'react';
import { useState, useEffect } from 'react';
import RecruitTags, { RecruitState } from '../Filters/RecruitTags';
import CareerTags from '../Filters/CareerTags';

const dummyData = [
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

const ProgramBox: React.FC = () => {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    // 실제 API 호출 대신 더미 데이터를 사용
    setPrograms(dummyData);
  }, []);

  return (
    <div className='flex flex-wrap justify-center items-center'>
      {programs.map((program) => (
        <div
          key={program.id}
          className='relative flex flex-col justify-center rounded-lg border border-gray-300 mb-[20px] mr-[20px]
          w-[165px] h-[306px] p-[8px]  
          sm:w-[275px] sm:h-[321px] sm:p-[10px]'
        >
          {program.status === RecruitState.ENDED && (
            <div className='absolute inset-0 bg-[#27272D47] bg-opacity-28 rounded-lg z-10'></div>
          )}
          <div className='flex justify-center pb-[10px]
          w-[149px] h-[106px]
          sm:w-[255px] sm:h-[164px]'>
            <img
              src={program.imageUrl}
              alt={program.title}
              className='w-full h-full object-cover rounded-t-[4px] rounded-b-[4px] opacity-100'
            />
          </div>
          <span className='flex inline-flex'>
            <RecruitTags status={program.status} />
            <CareerTags status={'career-explore'} />
          </span>
          <h2 className='text-[14px] font-semibold mb-2'>{program.title}</h2>
          <p className='text-[12px] font-normal text-gray-600'>{program.intro}</p>
          <p className='text-[12px] pt-[8px] font-medium text-pr-100'>
            <span className='text-gray-800'>모집 마감 </span> D-{program.dday}
          </p>
          <p className='text-[12px] font-medium text-pr-100'>
            <span className='text-gray-800'>진행 일정</span>  {program.program_start_date} - {program.program_finish_date}
          </p>
        </div>
      ))
      }
    </div >
  );
}

export default ProgramBox