export function getMetrics() {
    return new Promise(resolve => {
        setTimeout(() => {
            const data = [
                { name: 'Active users', value: '5000+' },
                { name: 'Downloads', value: '100K' },
                { name: 'Reviews', value: '12K' }
            ]
            
            resolve(data)
        }, 2000)
    })
}

export function getAboutStats() {
    return new Promise(resolve => {
        setTimeout(() => {
            const data = [
                { heading: '5k', subHeading: 'Active Users' },
                { heading: '10k', subHeading: 'Downloads' },
                { heading: '12k+', subHeading: 'Reviews' },
                { heading: '09', subHeading: 'Users' }
            ]

            resolve(data)
        }, 2000)
    })
}

export function getSetupSteps() {
    return new Promise(resolve => {
        const data = [
            { number: '01.', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea ornare blandit est, pellentesque orci.' },
            { number: '02.', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea ornare blandit est, pellentesque orci.' },
            { number: '03.', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea ornare blandit est, pellentesque orci.' }
        ]
        
        resolve(data)
    })
}