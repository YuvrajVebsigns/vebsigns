import React from 'react'
import Header from '../../../../Components/Header'
import Footer from '../../../../Components/Footer'
import WDADHero from './WDADHero'
import WDADConsultingSection from './WDADConsultingSection'
import WDADConsultingOverview from './WDADConsultingOverview'
import WDADOurExpertise from './WDADOurExpertise'
import WDADBenefitsSection from './WDADBenefitSection'
import InsightsSection from '../../../HomePage/InsightsSection'

const WDADHome = () => {
    return (
        <div>
            <Header />
            <WDADHero />
            <WDADConsultingSection />
            <WDADConsultingOverview />
            <WDADOurExpertise />
            <WDADBenefitsSection />
            <InsightsSection />
            <Footer />
        </div>
    )
}

export default WDADHome
