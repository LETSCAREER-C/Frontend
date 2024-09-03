import CareerFilter from '../../components/Filters/CareerFilter'
import ProgramBox from '../../components/PageNation/ProgramBox'
import TypeFilter from '../../components/Filters/TypeFilter'

const ListPage = () => {
  return (
    <div>
      <CareerFilter />
      <TypeFilter />
      <ProgramBox />
    </div>
  )
}

export default ListPage