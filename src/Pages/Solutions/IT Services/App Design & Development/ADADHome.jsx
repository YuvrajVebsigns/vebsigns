import React from 'react'
import Header from '../../../../Components/Header'
import Footer from '../../../../Components/Footer'
import ADADHero from './ADADHero'
import ADADConsultingSection from './ADADConsultingSection'
import ADADConsultingOverview from './ADADConsultingOverview'
import ADADOurExpertise from './ADADOurExpertise'
import ADADBenefitsSection from './ADADBenefitSection'
import InsightsSection from '../../../HomePage/InsightsSection'

const ADADHome = () => {
    return (
        <div>
            <Header />
            <ADADHero />
            <ADADConsultingSection />
            <ADADConsultingOverview />
            <ADADOurExpertise />
            <ADADBenefitsSection />
            <InsightsSection />
            <Footer />
        </div>
    )
}

export default ADADHome
