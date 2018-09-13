import React, { Component } from 'react'
import { Button, Well, FormControl, FormGroup, Glyphicon, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Collapse from 'rc-collapse'
import 'rc-collapse/assets/index.css'
const Panel = Collapse.Panel;


const arrowPath = 'M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88' +
    '.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.' +
    '6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-0.7 5.' +
    '2-2L869 536.2c14.7-12.8 14.7-35.6 0-48.4z';

class CuisineFrequency extends Component {
    pageType = this.props.frequencyObject.pageType

    state = {
        next: false,
        userKeystrokes: {},
        searchWellButtonsJSX: null,
        currentContainer: "regularly",
        [this.pageType]: {
            regularly: this.props[this.pageType].regularly,
            // occasionally: this.props[this.pageType].occasionally,
            // infrequently: this.props[this.pageType].infrequently,
            never: this.props[this.pageType].never
        }

    }

    componentDidMount() {
        this.setState({
            [this.pageType]: this.convertCuisinesToSearchValues(true)
        })
    }


    getUserKeystrokes = (e) => {
        const userKeystrokes = e.target.value.toLowerCase()
        const searchButtons = this.populateSearchButtonWell(userKeystrokes)

        this.setState({
            userKeystrokes,
            searchWellButtonsJSX: searchButtons
        });
    }

    populateSearchButtonWell = (userKeystrokes) => {
        let searchButtons = []
        if (userKeystrokes.length >= 1) {
            searchButtons = this.props.frequencyObject.searchOptions
                .filter((option) => (option.description.includes(userKeystrokes)) && !this.isInAFrequencyContainer(option.name))
                .map((option, i) =>
                    <Button
                        key={i}
                        onClick={() => this.addToCurrentContainer(option.name)}
                        bsStyle="success">{`${option.name}  `}<Glyphicon glyph="plus" />
                    </Button>)

            searchButtons = searchButtons.slice(0, 5)
        }
        else searchButtons = []

        return searchButtons
    }

    isInAFrequencyContainer = (searchValue) => {
        //occasionally, infrequently,
        const { regularly, never } = this.state[this.pageType]

        //|| occasionally.includes(searchValue) || infrequently.includes(searchValue)
        if (regularly.includes(searchValue) || never.includes(searchValue))
            return true
        else return false
    }

    addToCurrentContainer = (searchValue) => {
        const copyOfFrequencyObject = { ...this.state[this.pageType] }
        const copyOfCurrentContainer = [...copyOfFrequencyObject[this.state.currentContainer]]
        copyOfCurrentContainer.push(searchValue)
        copyOfFrequencyObject[this.state.currentContainer] = copyOfCurrentContainer

        this.setState({
            [this.pageType]: copyOfFrequencyObject,
        }, () => {
            const searchButtons = this.populateSearchButtonWell(this.state.userKeystrokes)
            this.setState({ searchWellButtonsJSX: searchButtons })
        })
    }

    removeFromCurrentContainer = (searchValue) => {
        const copyOfFrequencyObject = { ...this.state[this.pageType] }
        const copyOfCurrentContainer = [...copyOfFrequencyObject[this.state.currentContainer]]
        const index = copyOfCurrentContainer.findIndex(item => item === searchValue)
        copyOfCurrentContainer.splice(index, 1)
        copyOfFrequencyObject[this.state.currentContainer] = copyOfCurrentContainer

        this.setState({
            [this.pageType]: copyOfFrequencyObject,
        }, () => {
            const searchButtons = this.populateSearchButtonWell(this.state.userKeystrokes)
            this.setState({ searchWellButtonsJSX: searchButtons })
        })
    }

    expandIcon = ({ isActive }) => {
        return (
            <i style={{ marginRight: '.5rem' }}>
                <svg
                    viewBox="0 0 1024 1024"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    style={{
                        verticalAlign: '-.125em',
                        transition: 'transform .4s',
                        transform: `rotate(${isActive ? 90 : 0}deg)`,
                    }}
                >
                    <path d={arrowPath} p-id="5827"></path>
                </svg>
            </i>
        );
    }

    containerButtonCreator = (frequencyObject) => {
        //occasionally, infrequently,
        const { regularly, never } = frequencyObject
        const regularlyJSX = regularly.map((item, i) => <Button onClick={() => this.removeFromCurrentContainer(item)} key={i} bsStyle="danger">{`${item}  `}<Glyphicon glyph="minus" /></Button>)
        // const occasionallyJSX = occasionally.map((item, i) => <Button onClick={() => this.removeFromCurrentContainer(item)} key={i} bsStyle="danger">{`${item}  `}<Glyphicon glyph="minus" /></Button>)
        // const infrequentlyJSX = infrequently.map((item, i) => <Button onClick={() => this.removeFromCurrentContainer(item)} key={i} bsStyle="danger">{`${item}  `}<Glyphicon glyph="minus" /></Button>)
        const neverJSX = never.map((item, i) => <Button onClick={() => this.removeFromCurrentContainer(item)} key={i} bsStyle="danger">{`${item}  `}<Glyphicon glyph="minus" /></Button>)

        return {
            regularlyJSX,
            // occasionallyJSX,
            // infrequentlyJSX,
            neverJSX
        }
    }

    convertCuisinesToSearchValues = (reverse) => {
        let comparisonKey = 'name'
        let savedKey = 'searchValue'
        if (reverse) {
            comparisonKey = 'searchValue'
            savedKey = 'name'
        }

        const frequencies = { ...this.state[this.pageType] }
        frequencies.regularly = frequencies.regularly.map(item => {
            let index = this.props.frequencyObject.searchOptions.findIndex(option => option[comparisonKey] === item)
            return this.props.frequencyObject.searchOptions[index][savedKey]
        })
        // frequencies.occasionally = frequencies.occasionally.map(item => { 
        //     let index = this.props.frequencyObject.searchOptions.findIndex(option => option[comparisonKey] === item)
        //     return this.props.frequencyObject.searchOptions[index][savedKey]
        // })
        // frequencies.infrequently = frequencies.infrequently.map(item => { 
        //     let index = this.props.frequencyObject.searchOptions.findIndex(option => option[comparisonKey] === item)
        //     return this.props.frequencyObject.searchOptions[index][savedKey]
        // })
        frequencies.never = frequencies.never.map(item => {
            let index = this.props.frequencyObject.searchOptions.findIndex(option => option[comparisonKey] === item)
            return this.props.frequencyObject.searchOptions[index][savedKey]
        })
        return frequencies
    }

    createCategoryPanels = (categoryTitles, categoryButtons) => {
        const categoryPanelsJSX = categoryTitles.map((categoryTitle, i) =>
            (
                <Panel key={i} header={categoryTitle.replace('_', ' ')}>
                    {categoryButtons[categoryTitle]
                        .filter(option => !this.isInAFrequencyContainer(option.name))
                        .map((option, i) =>
                            <Button
                                key={i}
                                onClick={() => this.addToCurrentContainer(option.name)}
                                bsStyle="success">{`${option.name}  `}<Glyphicon glyph="plus" />
                            </Button>)}
                </Panel>
            )
        )
        return categoryPanelsJSX
    }

    render() {

        const { categoryTitles, categoryButtons, pageType, previous, next } = this.props.frequencyObject

        const categoryPanelsJSX = this.createCategoryPanels(categoryTitles, categoryButtons)

        //occasionallyJSX, infrequentlyJSX,
        const { regularlyJSX, neverJSX } = this.containerButtonCreator(this.state[pageType])

        return (
            <div>
                <nav className="navbar-fixed-top pageButtonsNav">
                    <div className="container">
                        <ul className="pager">
                            <li className="previous">
                                <Link to={previous}>
                                    Previous
                                </Link>
                            </li>
                            <li className="next">
                                <Link to={next} onClick={() => { this.props.updateSearchObject({ [pageType]: this.convertCuisinesToSearchValues(false) }) }}>
                                    Next
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <h3 className='cuisine-header' >Search for {pageType} and specify your desired frequency</h3>
                <Row>
                    <Col xs={6} sm={6} md={6} lg={6}>
                        <form>
                            <FormGroup>
                                <h5>Search for {pageType}</h5>
                                <FormControl
                                    type="text"
                                    value={this.state.value}
                                    placeholder="Search..."
                                    onChange={this.getUserKeystrokes}
                                />

                                <div>
                                    <Well bsSize="small">{this.state.searchWellButtonsJSX}<br />Click {pageType} to add to the open frequency container</Well>
                                </div>
                            </FormGroup>
                        </form>
                        <h5>Open each tab for common {pageType}</h5>
                        <Collapse expandIcon={this.expandIcon} defaultActiveKey="0" accordion={true}>
                            {categoryPanelsJSX}
                        </Collapse>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6}>
                        <h5>Open each tab to add {pageType} into it</h5>
                        <Collapse expandIcon={this.expandIcon} defaultActiveKey="regularly" accordion={true} onChange={key => this.setState({ currentContainer: key })}>
                            <Panel key="regularly" header={`Regularly (You'd be okay eating these ${pageType} every 2nd day)`} >{regularlyJSX.length === 0? <br /> : regularlyJSX}</Panel>
                            {/* <Panel key="occasionally" header={`Occasionally (You'd be okay eating these ${pageType} 2-3 times a week)`}>{occasionallyJSX}</Panel>
                                <Panel key="infrequently" header={`Infrequently (You'd be okay eating these ${pageType} once a week)`}>{infrequentlyJSX}</Panel> */}
                            <Panel key="never" header={`Never (No recipes will have these ${pageType})`}>{neverJSX.length === 0? <br /> : neverJSX}</Panel>
                        </Collapse>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default CuisineFrequency
