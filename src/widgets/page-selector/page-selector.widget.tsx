import "./page-selector-widget.css";
import PageSelector from "../../components/page-selector/page-selector.component";
import Button from "../../components/button/button.component";
import { PageSelectorWidgetItem } from "./page-selector-widget.interface";
import { useState } from "react";

function PageSelectorWidget() {
    
    const ALL_SELECT_ITEM_ID = 0;

    const [pageSelectorItems, setPageSelectorItems] = useState<PageSelectorWidgetItem[]>([
        { id: ALL_SELECT_ITEM_ID, name: "All pages", isSelected: false },
        { id: 1, name: "Page 1", isSelected: false },
        { id: 2, name: "Page 2", isSelected: false },
        { id: 3, name: "Page 3", isSelected: false },
        { id: 4, name: "Page 4", isSelected: false },
    ]);

    function isAllItemSelected() {
        return pageSelectorItems.filter(item => item.id !== ALL_SELECT_ITEM_ID && !item.isSelected).length === 0;
    }

    function onSingleItemChanged(item: PageSelectorWidgetItem) {
        let updatedItems = pageSelectorItems.map((pageSelectorItem) => {
            if (pageSelectorItem.id === item.id) {
                pageSelectorItem.isSelected = !item.isSelected;
            }
            return pageSelectorItem
        });

        updatedItems = updatedItems.map((pageSelectorItem => {
            if (pageSelectorItem.id === ALL_SELECT_ITEM_ID) {
                pageSelectorItem.isSelected = isAllItemSelected();
            }
            return pageSelectorItem
        }))

        setPageSelectorItems([...updatedItems]);
    }

    function onAllItemsChanged() {
        const isSelected = !isAllItemSelected();
        const updatedItems = pageSelectorItems.map((pageSelectorItem) => {
            pageSelectorItem.isSelected = isSelected;
            return pageSelectorItem
        });

        setPageSelectorItems([...updatedItems]);
    }

    function onDoneClick() {
        let selectedItems = pageSelectorItems
                                .filter((item) => item.id !== ALL_SELECT_ITEM_ID && item.isSelected)
                                .map(item => item.name)
                                .join(", ");
        alert(selectedItems === "" ? "No page is selected!" : selectedItems)
    }

    return (
        <div className="page-selector-widget-wrapper">
            <div className="page-selector-widget">
                {
                    <PageSelector
                        key={pageSelectorItems[ALL_SELECT_ITEM_ID].id}
                        text={pageSelectorItems[ALL_SELECT_ITEM_ID].name}
                        checked={
                            pageSelectorItems[ALL_SELECT_ITEM_ID].isSelected
                        }
                        onChange={() => onAllItemsChanged()}
                    />
                }
                
                <div className="horizon-line">
                    <hr />
                </div>

                {pageSelectorItems
                    .filter(item => item.id !== ALL_SELECT_ITEM_ID)
                    .map((pageSelectorItem) => (
                        <PageSelector
                            key={pageSelectorItem.id}
                            text={pageSelectorItem.name}
                            checked={pageSelectorItem.isSelected}
                            onChange={() => onSingleItemChanged(pageSelectorItem)}
                        />
                    ))}

                <div className="horizon-line">
                    <hr />
                </div>

                <div className="button-group">
                    <Button
                        onClick={onDoneClick}
                    >
                        Done
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default PageSelectorWidget;
