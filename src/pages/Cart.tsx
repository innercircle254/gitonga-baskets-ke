import React, { useState } from 'react';
import { useCart } from '../CartContext';
import { Trash2, Plus, Minus, Copy, CheckCircle } from 'lucide-react';
import styles from './Cart.module.css';

const Cart: React.FC = () => {
  const { cart, total, updateQuantity, removeFromCart } = useCart();
  const [step, setStep] = useState(1);
  const [transactionCode, setTransactionCode] = useState('');
  const [copied, setCopied] = useState(false);

  const TILL_NUMBER = '123456';

  const copyTill = () => {
    navigator.clipboard.writeText(TILL_NUMBER);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOrder = () => {
    if (!transactionCode) {
      alert('Please enter your M-Pesa transaction code.');
      return;
    }

    const itemsList = cart.map(item => `${item.name} (x${item.quantity})`).join('\n');
    const message = `*NEW ORDER*\n\n*Items:*\n${itemsList}\n\n*Total:* KES ${(total + 300).toLocaleString()}\n*Transaction Code:* ${transactionCode}\n\n*Delivery Address:* [Enter here]`;
    
    window.open(`https://wa.me/254713988224?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (cart.length === 0) {
    return (
      <div className={`container ${styles.empty}`}>
        <h2>Your cart is empty</h2>
        <p>Go to the shop to find something beautiful.</p>
        <a href="/shop" className="btn btn-primary">Continue Shopping</a>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className={styles.title}>Your Shopping Cart</h1>
      <div className={styles.cartGrid}>
        <div className={styles.items}>
          {cart.map(item => (
            <div key={item.id} className={styles.item}>
              <div className={styles.itemImage}>
                {item.image ? (
                  <img src={item.image} alt={item.name} className={styles.thumbImage} />
                ) : (
                  <div className={styles.imagePlaceholder} style={{ backgroundColor: item.imageColor }}></div>
                )}
              </div>
              <div className={styles.itemInfo}>
                <h3>{item.name}</h3>
                <p>KES {item.price.toLocaleString()}</p>
                <div className={styles.controls}>
                  <button onClick={() => updateQuantity(item.id, -1)}><Minus size={16} /></button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}><Plus size={16} /></button>
                </div>
              </div>
              <button className={styles.remove} onClick={() => removeFromCart(item.id)}>
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>
        <div className={styles.summary}>
          <h3>Order Summary</h3>
          <div className={styles.row}>
            <span>Subtotal</span>
            <span>KES {total.toLocaleString()}</span>
          </div>
          <div className={styles.row}>
            <span>Delivery (Nairobi)</span>
            <span>KES 300</span>
          </div>
          <div className={`${styles.row} ${styles.total}`}>
            <span>Total</span>
            <span>KES {(total + 300).toLocaleString()}</span>
          </div>

          <div className={styles.checkoutFlow}>
            {step === 1 ? (
              <button className={`btn btn-primary ${styles.checkoutBtn}`} onClick={() => setStep(2)}>
                Checkout with M-Pesa
              </button>
            ) : (
              <div className={styles.mpesaSteps}>
                <div className={styles.stepBox}>
                  <p><strong>Step 1:</strong> Pay to Till Number</p>
                  <div className={styles.tillDisplay}>
                    <span>{TILL_NUMBER}</span>
                    <button onClick={copyTill} className={styles.copyBtn}>
                      {copied ? <CheckCircle size={16} color="green" /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
                <div className={styles.stepBox}>
                  <p><strong>Step 2:</strong> Enter Transaction Code</p>
                  <input 
                    type="text" 
                    placeholder="e.g. RJL9X2Z4W" 
                    className={styles.codeInput}
                    value={transactionCode}
                    onChange={(e) => setTransactionCode(e.target.value.toUpperCase())}
                  />
                </div>
                <button className={`btn btn-primary ${styles.checkoutBtn}`} onClick={handleOrder}>
                  Complete via WhatsApp
                </button>
                <button className={styles.backBtn} onClick={() => setStep(1)}>Go Back</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
