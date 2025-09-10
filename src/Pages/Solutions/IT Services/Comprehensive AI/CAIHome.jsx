import React from 'react'
import Header from '../../../../Components/Header'
import Footer from '../../../../Components/Footer'
import CAIHero from './CAIHero'
import CAIConsultingSection from './CAIConsultingSection'
import CAIConsultingOverview from './CAIConsultingOverview'
import CAIOurExpertise from './CAIOurExpertise'
import CAIBenefitsSection from './CAIBenefitSection'
import InsightsSection from '../../../HomePage/InsightsSection'

const CAIHome = () => {
    return (
        <div>
            <Header />
            <CAIHero />
            <CAIConsultingSection />
            <CAIConsultingOverview />
            <CAIOurExpertise />
            <CAIBenefitsSection />
            <InsightsSection />
            <Footer />
        </div>
    )
}

export default CAIHome
