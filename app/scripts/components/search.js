import React from 'react'
import algoliasearch from 'algoliasearch'
import Hit from './hit'
import { InstantSearch, SearchBox, Hits, Configure, Pagination } from 'react-instantsearch-dom'

const dataEndpoint      = `http://localhost:3035/api/v1/search/data`
const appKey            = 'SIK6RW6AG4'
const adminKey          = 'f5a08ead95e6d52ed41957d41f6c86eb'
const searchClientKey   = '31d9251d4505f39014a6de1a0abd7342'
const client            = algoliasearch(appKey, adminKey)
const index             = client.initIndex('elc_data_index')
const searchClient      = algoliasearch(appKey, searchClientKey)


class Search extends React.Component {
    constructor(){
        super()
        this.postAlgoliaSearch()
    }
    
    saveAlgoliaSearch(d){
        index
            .saveObjects(d)
            .then( () => console.log('Data sent to Algolia Search API!') )
            .catch( error => console.log(error) )
    }

    postAlgoliaSearch(){
    
        fetch(dataEndpoint)
            .then( (response) => response.json() )
            .then( (data) => this.saveAlgoliaSearch(data) )
            
    }

    render() {
        return (
            <section id="search">
                <div className="content">
                    <InstantSearch indexName="elc_data_index" searchClient={searchClient}>
                        <Configure hitsPerPage={4} />
                        <SearchBox />
                        <Hits hitComponent={Hit} />
                        <Pagination />
                    </InstantSearch>
                </div>
            </section>
        )
    }
}

module.exports = Search