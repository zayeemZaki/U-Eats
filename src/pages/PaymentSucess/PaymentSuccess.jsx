import React from 'react';

const PaymentSuccess = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Payment Successful!</h1>
            <p style={styles.message}>Your payment has been processed successfully.</p>
            <p style={styles.thankYou}>Thank you for your purchase!</p>
            {/* You can add more content here such as order details, a continue shopping button, etc. */}
        </div>
    );
};

// Styles for the component
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f3f4f6',
        padding: '20px',
    },
    header: {
        fontSize: '2rem',
        color: '#4BB543',
    },
    message: {
        fontSize: '1.2rem',
        margin: '10px 0',
    },
    thankYou: {
        fontSize: '1rem',
        color: '#333',
    },
};

export default PaymentSuccess;
