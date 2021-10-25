const Container = (props) => {
    return (
        <div className="container">
            <header>
                <div className="title">
                    <div className="titleTop">S P L I</div>
                    <div className="titleBot">T T E R</div>
                </div>
            </header>
            <div className="component">
                <div className="input">
                    <div className="bill">
                        <label htmlFor="bill">Bill</label>
                        <input type="text" name="bill" placeholder="0" id="bill" onChange={props.handleBillText}/>
                    </div>
                    <div className="tip">
                        <label htmlFor="tip">Select Tip %</label>
                        <div className="btnContainer" id="tip">
                            <button type="button" onClick={props.handleTipPercent} name="button">5%</button>
                            <button type="button" onClick={props.handleTipPercent} name="button">10%</button>
                            <button type="button" onClick={props.handleTipPercent} name="button">15%</button>
                            <button type="button" onClick={props.handleTipPercent} name="button">25%</button>
                            <button type="button" onClick={props.handleTipPercent} name="button">50%</button>
                            <input type="text" onChange={props.handleCustomTipPercent} name="custom" placeholder="Custom" id="custom"/>
                        </div>
                    </div>
                    <div className="numberOfPeople">
                        <label htmlFor="number">Number of People</label>
                        <input type="text" name="number" placeholder="0" id="number" onChange={props.handlePeople}/>
                    </div>
                </div>
                <div className="display">
                    <div className="amount">
                        <div className="amountLabel">
                            <div className="tipAmount">Tip Amount</div>
                            <div className="perPerson">/ person</div>
                        </div>
                        <div className="amountDisplay">$0</div>
                    </div>
                    <div className="total">
                        <div className="totalLabel">
                            <div className="totalText">Total</div>
                            <div className="perPerson">/ person</div>
                        </div>
                        <div className="totalAmountDisplay">$0</div>
                    </div>
                    <div className="reset">
                        <button type="submit" name="button">RESET</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Container;
