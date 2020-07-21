# Configure the Azure Provider
provider "azurerm" {
  version = "=2.8.0"
  features {}
}
# Create a resource group
resource "azurerm_resource_group" "tf_testadl" {
  name = "tfmainadl"
  location = "Brazil South"
}

resource "azurerm_container_group" "tfcg_testadl" {
  name                      = "adltest"
  location                  = azurerm_resource_group.tf_testadl.location
  resource_group_name       = azurerm_resource_group.tf_testadl.name

  ip_address_type     = "public"
  dns_name_label      = "alexistestadl"
  os_type             = "Linux"

  container {
      name            = "adltest"
      image           = "alexismr01/adl-test"
        cpu             = "1"
        memory          = "1"

        ports {
            port        = 80
            protocol    = "TCP"
        }
  } 
}
