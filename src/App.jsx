import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";
const App = () => {
    // Create styles

    return (
        <div className="App">
            <PDFDownloadLink document={<MyDocument />} fileName="test.pdf">
                {({ blob, url, loading, error }) =>
                    loading ? (
                        <button>Loading</button>
                    ) : (
                        <button>Download</button>
                    )
                }
            </PDFDownloadLink>
        </div>
    );
};

export default App;
