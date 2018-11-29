import React from 'react';

class TableDisplay extends React.Component{

    loopHeader = (data) => {
        if(data){
            return data.map((item,i) => <th key={i}>{item.name}</th>)
        }
    }
    loopTable = (data) => {
        if(data){
            return data.map((item,i)=> <td key={i}>{item.total_docs}</td>)
        }
    }
    theTable01 = (data, _titles, _values) =><div className="masonry-item col-md-12 mB-20">
                                                <div className="bd bgc-white"> 
                                                    <div className="layers">
                                                        <div className="layer w-100 p-20">
                                                            <h6 className="lh-1">{data ? Object.keys(data)[1] : null}</h6>
                                                        </div>
                                                        <div className="layer w-100">
                                                            <div className="bgc-light-blue-500 c-white p-20">
                                                                <div className="peers ai-c jc-sb gap-40">
                                                                <div className="peer peer-greed">
                                                                    <h5>{new Date().toLocaleString('en-us')}</h5>
                                                                    <p className="mB-0">There is a description text</p>
                                                                </div>
                                                                <div className="peer">
                                                                    <h3 className="text-right">There are {_values ? Object.keys(_values).length : null} items</h3>
                                                                </div>
                                                                </div>
                                                            </div>
                                                            <div className="table-responsive p-20">
                                                                <table className="table">
                                                                <thead>
                                                                    <tr>
                                                                        {this.loopHeader(_titles)}
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>{this.loopTable(_values)}</tr>
                                                                </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
    
    theTable02 = (_titles, _values) => <div class="bgc-white bd bdrs-3 p-20 mB-20">
                                            <h4 class="c-grey-900 mB-20">Simple Table</h4>
                                            <p>There is a description tex</p>
                                            <table class="table">
                                            <thead>
                                                <tr>
                                                    {this.loopHeader(_titles)}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    {this.loopTable(_values)}
                                                </tr>
                                            </tbody>
                                            </table>
                                        </div>
    theTable03 = (_titles, _values) => <div class="bgc-white bd bdrs-3 p-20 mB-20 ovf-test">
                                            <h4 class="c-grey-900 mB-20">Bootstrap Data Table</h4>
                                            <table id="dataTable" class="table table-striped table-bordered" cellspacing="0" width="100%">
                                                <thead>
                                                <tr>
                                                    {this.loopHeader(_titles)}
                                                </tr>
                                                </thead>
                                                <tfoot>
                                                <tr>
                                                    {this.loopHeader(_titles)}
                                                </tr>
                                                </tfoot>
                                                <tbody>
                                                <tr>
                                                    {this.loopTable(_values)}
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>

    render(){
        let {
            propsData,
            confidentiality_data,
            confidentiality_labels,
            doctype_data,
            doctype_labels,
            language_data,
            language_labels
        } = [];
        if(this.props._data){
            propsData = this.props._data;    
            confidentiality_labels = this.props._data.confidentiality_labels;
            confidentiality_data = this.props._data.confidentiality_data;
            doctype_data = this.props._data.doctype_data;
            doctype_labels = this.props._data.doctype_labels;
            language_data = this.props._data.language_data;
            language_labels = this.props._data.language_labels;
        }
        return <div className="">
                    {this.theTable01(propsData, confidentiality_labels, confidentiality_data)}
                    {this.theTable02(doctype_labels, doctype_data )}
                    {this.theTable03(language_labels, language_data )}
                </div>
                    
    }
} 

export default TableDisplay