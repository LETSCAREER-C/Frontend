import CareerFilter from '../../components/Filters/CareerFilter'
import FilterTag from '../../components/Filters/CareerTags'
import ProgramBox from '../../components/PageNation/ProgramBox'
import CareerTags from '../../components/Filters/CareerTags'
import RecruitTags from '../../components/Filters/RecruitTags'
import TypeFilter from '../../components/Filters/TypeFilter'

const ListPage = () => {
  return (
    <div>
      <CareerFilter />
      {/* <CareerTags status={'career-explore'} />
      <RecruitTags status={'recruiting'} />
      <RecruitTags status={'ended'} /> */}
      <TypeFilter />
      <ProgramBox />
    </div>
  )
}

export default ListPage