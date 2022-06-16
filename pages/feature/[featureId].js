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
    const response = await fetch(`/api/feature/${featureId}`)
    const feature = await response.json()

    return {
        props: {
            feature
        }
    }
}