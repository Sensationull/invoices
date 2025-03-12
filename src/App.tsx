import styles from "./App.module.css";
import InvoiceNavBar from "./components/InvoiceNavBar";

function App() {
  return (
    <div className={styles.container}>
      <InvoiceNavBar />
    </div>
  );
}

export default App;
