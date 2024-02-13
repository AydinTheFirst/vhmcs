export interface VMList {
  vm: string;
  memory_size_MiB: number;
  name: string;
  power_state: string;
  cpu_count: number;
}

export interface VM {
  boot: {
    delay: number;
    efi_legacy_boot: boolean;
    enter_setup_mode: boolean;
    network_protocol: string;
    retry: boolean;
    retry_delay: number;
    type: string;
  };
  boot_devices: Array<{
    disks: string[];
    nic: string;
    type: string;
  }>;
  cdroms: Array<{
    key: string;
    value: {
      allow_guest_control: boolean;
      backing: {
        auto_detect: boolean;
        device_access_type: string;
        host_device: string;
        iso_file: string;
        type: string;
      };
      ide: {
        master: boolean;
        primary: boolean;
      };
      label: string;
      sata: {
        bus: number;
        unit: number;
      };
      start_connected: boolean;
      state: string;
      type: string;
    };
  }>;
  cpu: {
    cores_per_socket: number;
    count: number;
    hot_add_enabled: boolean;
    hot_remove_enabled: boolean;
  };
  disks: Array<{
    key: string;
    value: {
      backing: {
        type: string;
        vmdk_file: string;
      };
      capacity: number;
      ide: {
        master: boolean;
        primary: boolean;
      };
      label: string;
      sata: {
        bus: number;
        unit: number;
      };
      scsi: {
        bus: number;
        unit: number;
      };
      type: string;
    };
  }>;
  floppies: Array<{
    key: string;
    value: {
      allow_guest_control: boolean;
      backing: {
        auto_detect: boolean;
        host_device: string;
        image_file: string;
        type: string;
      };
      label: string;
      start_connected: boolean;
      state: string;
    };
  }>;
  guest_OS: string;
  hardware: {
    upgrade_error: {};
    upgrade_policy: string;
    upgrade_status: string;
    upgrade_version: string;
    version: string;
  };
  identity: {
    bios_uuid: string;
    instance_uuid: string;
    name: string;
  };
  instant_clone_frozen: boolean;
  memory: {
    hot_add_enabled: boolean;
    hot_add_increment_size_MiB: number;
    hot_add_limit_MiB: number;
    size_MiB: number;
  };
  name: string;
  nics: Array<{
    key: string;
    value: {
      allow_guest_control: boolean;
      backing: {
        connection_cookie: number;
        distributed_port: string;
        distributed_switch_uuid: string;
        host_device: string;
        network: string;
        network_name: string;
        opaque_network_id: string;
        opaque_network_type: string;
        type: string;
      };
      label: string;
      mac_address: string;
      mac_type: string;
      pci_slot_number: number;
      start_connected: boolean;
      state: string;
      type: string;
      upt_compatibility_enabled: boolean;
      wake_on_lan_enabled: boolean;
    };
  }>;
  parallel_ports: Array<{
    key: string;
    value: {
      allow_guest_control: boolean;
      backing: {
        auto_detect: boolean;
        file: string;
        host_device: string;
        type: string;
      };
      label: string;
      start_connected: boolean;
      state: string;
    };
  }>;
  power_state: string;
  sata_adapters: Array<{
    key: string;
    value: {
      bus: number;
      label: string;
      pci_slot_number: number;
      type: string;
    };
  }>;
  scsi_adapters: Array<{
    key: string;
    value: {
      label: string;
      pci_slot_number: number;
      scsi: {
        bus: number;
        unit: number;
      };
      sharing: string;
      type: string;
    };
  }>;
  serial_ports: Array<{
    key: string;
    value: {
      allow_guest_control: boolean;
      backing: {
        auto_detect: boolean;
        file: string;
        host_device: string;
        network_location: string;
        no_rx_loss: boolean;
        pipe: string;
        proxy: string;
        type: string;
      };
      label: string;
      start_connected: boolean;
      state: string;
      yield_on_poll: boolean;
    };
  }>;
}

export interface CreateVmPayload {
  boot?: {
    delay?: number;
    efi_legacy_boot?: boolean;
    enter_setup_mode?: boolean;
    network_protocol?: string;
    retry?: boolean;
    retry_delay?: number;
    type?: string;
  };
  boot_devices?: Array<{
    type?: string;
  }>;
  cdroms?: Array<{
    allow_guest_control?: boolean;
    backing?: {
      device_access_type?: string;
      host_device?: string;
      iso_file?: string;
      type?: string;
    };
    ide?: {
      master?: boolean;
      primary?: boolean;
    };
    sata?: {
      bus?: number;
      unit?: number;
    };
    start_connected?: boolean;
    type?: string;
  }>;
  cpu?: {
    cores_per_socket?: number;
    count?: number;
    hot_add_enabled?: boolean;
    hot_remove_enabled?: boolean;
  };
  disks?: Array<{
    backing?: {
      type?: string;
      vmdk_file?: string;
    };
    ide?: {
      master?: boolean;
      primary?: boolean;
    };
    new_vmdk?: {
      capacity?: number;
      name?: string;
      storage_policy?: {
        policy?: string;
      };
    };
    sata?: {
      bus?: number;
      unit?: number;
    };
    scsi?: {
      bus?: number;
      unit?: number;
    };
    type?: string;
  }>;
  floppies?: Array<{
    allow_guest_control?: boolean;
    backing?: {
      host_device?: string;
      image_file?: string;
      type?: string;
    };
    start_connected?: boolean;
  }>;
  guest_OS: string;
  hardware_version?: string;
  memory?: {
    hot_add_enabled?: boolean;
    size_MiB?: number;
  };
  name?: string;
  nics?: Array<{
    allow_guest_control?: boolean;
    backing?: {
      distributed_port?: string;
      network?: string;
      type?: string;
    };
    mac_address?: string;
    mac_type?: string;
    pci_slot_number?: number;
    start_connected?: boolean;
    type?: string;
    upt_compatibility_enabled?: boolean;
    wake_on_lan_enabled?: boolean;
  }>;
  parallel_ports?: Array<{
    allow_guest_control?: boolean;
    backing?: {
      file?: string;
      host_device?: string;
      type?: string;
    };
    start_connected?: boolean;
  }>;
  placement: {
    cluster?: string;
    datastore: string;
    folder: string;
    host?: string;
    resource_pool?: string;
  };
  sata_adapters?: Array<{
    bus?: number;
    pci_slot_number?: number;
    type?: string;
  }>;
  scsi_adapters?: Array<{
    bus?: number;
    pci_slot_number?: number;
    sharing?: string;
    type?: string;
  }>;
  serial_ports?: Array<{
    allow_guest_control?: boolean;
    backing?: {
      file?: string;
      host_device?: string;
      network_location?: string;
      no_rx_loss?: boolean;
      pipe?: string;
      proxy?: string;
      type?: string;
    };
    start_connected?: boolean;
    yield_on_poll?: boolean;
  }>;
  storage_policy?: {
    policy?: string;
  };
}

export interface VMPlacement {
  disks: Array<{
    key: string;
    value: {
      datastore: string;
    };
  }>;
  placement: {
    cluster: string;
    datastore: string;
    folder: string;
    host: string;
    resource_pool: string;
  };
}
