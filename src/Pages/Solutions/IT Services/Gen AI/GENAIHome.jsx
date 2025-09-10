import React from 'react'
import Header from '../../../../Components/Header'
import Footer from '../../../../Components/Footer'
import GENAIHero from './GENAIHero'
import GENAIConsultingSection from './GENAIConsultingSection'
import GENAIConsultingOverview from './GENAIConsultingOverview'
import GENAIOurExpertise from './GENAIOurExpertise'
import GENAIBenefitsSection from './GENAIBenefitSection'
import InsightsSection from '../../../HomePage/InsightsSection'

const GENAIHome = () => {
    return (
        <div>
            <Header />
            <GENAIHero />
            <GENAIConsultingSection />
            <GENAIConsultingOverview />
            <GENAIOurExpertise />
            <GENAIBenefitsSection />
            <InsightsSection />
            <Footer />
        </div>
    )
}

export default GENAIHome
