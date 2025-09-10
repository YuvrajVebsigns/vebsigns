import React from 'react'
import Header from '../../../../Components/Header'
import Footer from '../../../../Components/Footer'
import OPENAIHero from './OPENAIHero'
import OPENAIConsultingSection from './OPENAIConsultingSection'
import OPENAIConsultingOverview from './OPENAIConsultingOverview'
import OPENAIOurExpertise from './OPENAIOurExpertise'
import OPENAIBenefitsSection from './OPENAIBenefitSection'
import InsightsSection from '../../../HomePage/InsightsSection'

const OPENAIHome = () => {
    return (
        <div>
            <Header />
            <OPENAIHero />
            <OPENAIConsultingSection />
            <OPENAIConsultingOverview />
            <OPENAIOurExpertise />
            <OPENAIBenefitsSection />
            <InsightsSection />
            <Footer />
        </div>
    )
}

export default OPENAIHome
