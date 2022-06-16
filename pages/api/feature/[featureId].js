export default function handler(req, res) {
    const data = [
        { title: 'Send Money', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui id lobortis pretium blandit.' },
        { title: 'Money Request', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui id lobortis pretium blandit.' },
        { title: 'Pay Bill', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui id lobortis pretium blandit.' },
        { title: 'Mobile Recharge', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui id lobortis pretium blandit.' }
    ]
    res.status(200).json(data.at(req.query.featureId))
}