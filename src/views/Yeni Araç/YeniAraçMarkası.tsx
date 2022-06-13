import CardDemo from '../Card';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

function YeniAraçMarkası() {
    return (
        <div>
            <div>
                <div>
                    <div className="text-3xl text-800 font-bold mb-4">
                        Stock App<i className="fa-solid fa-taxi"></i>
                    </div>
                </div>

                <div className="p-datatable p-component p-datatable-selectable p-datatable-responsive-scroll" data-scrollselectors=".p-datatable-wrapper">
                    <div className="p-datatable-header">
                        <div className="flex flex-column md:flex-row md:align-items-center justify-content-between"></div>

                        <div className="flex flex-column md:flex-row md:align-items-center justify-content-between">
                            <span className="p-input-icon-left w-full md:w-auto">
                                <i className="fa-solid fa-taxi">Stock App</i>
                                <i className="pi pi-search" style={{ marginLeft: '260px' }}></i>
                                <input type="search" placeholder="Search..." className="p-inputtext p-component  " style={{ width: '800px', marginLeft: '250px' }} />
                            </span>
                            <div className="mt-3 md:mt-0 flex justify-content-end">
                                <button className="p-button p-component mr-2 p-button-rounded ">
                                    <i className="fa-solid fa-magnifying-glass-location">Arama</i>
                                </button>
                                <button className="p-button p-component p-button-danger mr-2  p-disabled" style={{ width: '140px' }}>
                                    <i className="fa-solid fa-address-card">Yeni Kayıt </i>
                                </button>
                                <button className="p-button p-component p-button-help p-button-icon-only" style={{ width: '140px' }}>
                                    <i className="fa-solid fa-user-gear">Diğer İşlemler</i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
        </div>
    );
}

export default YeniAraçMarkası;
