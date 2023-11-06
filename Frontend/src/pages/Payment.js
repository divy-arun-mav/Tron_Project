import React from 'react'

function Payment() {
    return (
        <>
            <div className='box'>
                <div className='head-1'>
                    <h2>Crypto Payments</h2>
                </div>
                <div className='form'>
                    <h3>Merchant Dashboard</h3>
                    <div className="chain">
                        <label for="chain">Choose a Chain:</label>
                        <select id="chain" name="chain">
                            <option value="eth">ETH</option>
                        </select>
                    </div>

                    <div className="asset">
                        <label for="asset">Payment Asset Type:</label>
                        <select id="asset" name="asset">
                            <option value="eth">ETH</option>
                            <option value="usdc">USDC</option>
                        </select>
                    </div>

                    <div className="amount">
                        <label for="amount">Enter Amount:</label>
                        <input id="amount" placeholder="amount" />
                    </div>

                    <div className="address">
                        <label for="address">Enter Wallet Address:</label>
                        <input id="address" placeholder="wallet address" />
                    </div>

                    <button>Generate</button>
                </div>
            </div>
        </>
    )
}

export default Payment