import Banner from '@/components/module/Banner/Banner'
import styles from './HomePage.module.css'
import Attributes from '@/components/module/Attributes/Attributes'
import Definition from '@/components/module/Definition/Definition'
import Companies from '@/components/module/Companies/Companies'
import Instruction from '@/components/module/Instruction/Instruction'
import Guide from '@/components/module/Guide/Guide'
import Restrictions from '@/components/module/Restrictions/Restrictions'

function HomePage() {
    return (
        <div className={styles['container']}>
            <Banner />
            <Attributes />
            <Definition />
            <Companies />
            <Instruction />
            <Guide />
            <Restrictions />
        </div>
    )
}

export default HomePage 