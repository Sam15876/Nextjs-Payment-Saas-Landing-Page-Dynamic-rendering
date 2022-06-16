// Components
import PageContainer from '../../components/global/pageContainer/pageContainer'
import FeatureComponent from '../../components/features/featureComponent'

export default function FeaturePage({ feature }) {
    return(
        <PageContainer>
            <FeatureComponent feature={feature} />
        </PageContainer>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { featureId: '1' } },
            { params: { featureId: '2' } },
            { params: { featureId: '3' } },
            { params: { featureId: '4' } }
        ],
        fallback: false
    }
}

export async function getStaticProps(context) {
    const featureId = context?.params?.featureId
    
    let feature
    
    // Need to run a try-catch block because this will fail on PROD build as API won't be running at the time of build and hence fetch attempt will fail
    try {
        const response = await fetch(`${process.env.BASE_URL}/api/feature/${featureId}`)
        feature = await response.json()
    }
    catch(error) {
        const features = [
            { title: 'Send Money', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui id lobortis pretium blandit.' },
            { title: 'Money Request', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui id lobortis pretium blandit.' },
            { title: 'Pay Bill', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui id lobortis pretium blandit.' },
            { title: 'Mobile Recharge', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui id lobortis pretium blandit.' }
        ]
        feature = features.at(featureId - 1)
    }

    return {
        props: {
            feature
        }
    }
}